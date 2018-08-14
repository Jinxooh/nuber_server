import Verification from "../../../entities/Verification";
import {
  PhoneVerificationMutationArgs,
  PhoneVerificationResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import { sendVerificationSMS } from "../../../utils/sendSMS";

const resolvers: Resolvers = {
  Mutation: {
    PhoneVerification: async (
      _,
      args: PhoneVerificationMutationArgs
    ): Promise<PhoneVerificationResponse> => {
      const { phoneNumber } = args;
      try {
        const existingVerificiation = await Verification.findOne({ payload: phoneNumber })
        if (existingVerificiation) {
          existingVerificiation.remove();
        }
        const newVerification = await Verification.create({
          payload: phoneNumber,
          target: 'PHONE',
        }).save();
        await sendVerificationSMS(newVerification.payload, newVerification.key);
        return {
          ok: true,
          error: null,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        }
      }
    }
  }
};

export default resolvers;
