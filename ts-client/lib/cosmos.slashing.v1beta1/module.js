// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { Params } from "./types/cosmos/slashing/v1beta1/slashing";
import { QueryParamsResponse } from "./types/cosmos/slashing/v1beta1/query";
import { QuerySigningInfoResponse } from "./types/cosmos/slashing/v1beta1/query";
import { QuerySigningInfosRequest } from "./types/cosmos/slashing/v1beta1/query";
import { QuerySigningInfoRequest } from "./types/cosmos/slashing/v1beta1/query";
import { QuerySigningInfosResponse } from "./types/cosmos/slashing/v1beta1/query";
import { SigningInfo } from "./types/cosmos/slashing/v1beta1/genesis";
import { MissedBlock } from "./types/cosmos/slashing/v1beta1/genesis";
import { MsgUnjail } from "./types/cosmos/slashing/v1beta1/tx";
import { QueryParamsRequest } from "./types/cosmos/slashing/v1beta1/query";
import { GenesisState } from "./types/cosmos/slashing/v1beta1/genesis";
import { ValidatorSigningInfo } from "./types/cosmos/slashing/v1beta1/slashing";
import { MsgUpdateParams } from "./types/cosmos/slashing/v1beta1/tx";
import { MsgUpdateParamsResponse } from "./types/cosmos/slashing/v1beta1/tx";
import { ValidatorMissedBlocks } from "./types/cosmos/slashing/v1beta1/genesis";
import { MsgUnjailResponse } from "./types/cosmos/slashing/v1beta1/tx";
export { Params, QueryParamsResponse, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfoRequest, QuerySigningInfosResponse, SigningInfo, MissedBlock, MsgUnjail, QueryParamsRequest, GenesisState, ValidatorSigningInfo, MsgUpdateParams, MsgUpdateParamsResponse, ValidatorMissedBlocks, MsgUnjailResponse };
export const registry = new Registry(msgTypes);
function getStructure(template) {
    const structure = { fields: [] };
    for (let [key, value] of Object.entries(template)) {
        let field = { name: key, type: typeof value };
        structure.fields.push(field);
    }
    return structure;
}
const defaultFee = {
    amount: [],
    gas: "200000",
};
export const txClient = ({ signer, prefix, addr } = { addr: "http://localhost:26657", prefix: "cosmos" }) => {
    return {
        async sendParams({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendParams: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.params({ value: Params.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendParams: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryParamsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryParamsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryParamsResponse({ value: QueryParamsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryParamsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQuerySigningInfoResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQuerySigningInfoResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.querySigningInfoResponse({ value: QuerySigningInfoResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQuerySigningInfoResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQuerySigningInfosRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQuerySigningInfosRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.querySigningInfosRequest({ value: QuerySigningInfosRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQuerySigningInfosRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQuerySigningInfoRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQuerySigningInfoRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.querySigningInfoRequest({ value: QuerySigningInfoRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQuerySigningInfoRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQuerySigningInfosResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQuerySigningInfosResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.querySigningInfosResponse({ value: QuerySigningInfosResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQuerySigningInfosResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendSigningInfo({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendSigningInfo: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.signingInfo({ value: SigningInfo.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendSigningInfo: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMissedBlock({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMissedBlock: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.missedBlock({ value: MissedBlock.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMissedBlock: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUnjail({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUnjail: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUnjail({ value: MsgUnjail.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUnjail: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryParamsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryParamsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryParamsRequest({ value: QueryParamsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryParamsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGenesisState({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.genesisState({ value: GenesisState.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendValidatorSigningInfo({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendValidatorSigningInfo: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.validatorSigningInfo({ value: ValidatorSigningInfo.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendValidatorSigningInfo: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateParams({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateParamsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateParamsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUpdateParamsResponse({ value: MsgUpdateParamsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateParamsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendValidatorMissedBlocks({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendValidatorMissedBlocks: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.validatorMissedBlocks({ value: ValidatorMissedBlocks.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendValidatorMissedBlocks: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUnjailResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUnjailResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUnjailResponse({ value: MsgUnjailResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUnjailResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        params({ value }) {
            try {
                return { typeUrl: "/cosmos.slashing.v1beta1.Params", value: Params.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Params: Could not create message: ' + e.message);
            }
        },
        queryParamsResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse", value: QueryParamsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message);
            }
        },
        querySigningInfoResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse", value: QuerySigningInfoResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QuerySigningInfoResponse: Could not create message: ' + e.message);
            }
        },
        querySigningInfosRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest", value: QuerySigningInfosRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QuerySigningInfosRequest: Could not create message: ' + e.message);
            }
        },
        querySigningInfoRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest", value: QuerySigningInfoRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QuerySigningInfoRequest: Could not create message: ' + e.message);
            }
        },
        querySigningInfosResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse", value: QuerySigningInfosResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QuerySigningInfosResponse: Could not create message: ' + e.message);
            }
        },
        signingInfo({ value }) {
            try {
                return { typeUrl: "/cosmos.slashing.v1beta1.SigningInfo", value: SigningInfo.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:SigningInfo: Could not create message: ' + e.message);
            }
        },
        missedBlock({ value }) {
            try {
                return { typeUrl: "/cosmos.slashing.v1beta1.MissedBlock", value: MissedBlock.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MissedBlock: Could not create message: ' + e.message);
            }
        },
        msgUnjail({ value }) {
            try {
                return { typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail", value: MsgUnjail.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUnjail: Could not create message: ' + e.message);
            }
        },
        queryParamsRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest", value: QueryParamsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message);
            }
        },
        genesisState({ value }) {
            try {
                return { typeUrl: "/cosmos.slashing.v1beta1.GenesisState", value: GenesisState.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
            }
        },
        validatorSigningInfo({ value }) {
            try {
                return { typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo", value: ValidatorSigningInfo.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:ValidatorSigningInfo: Could not create message: ' + e.message);
            }
        },
        msgUpdateParams({ value }) {
            try {
                return { typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams", value: MsgUpdateParams.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
            }
        },
        msgUpdateParamsResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParamsResponse", value: MsgUpdateParamsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
            }
        },
        validatorMissedBlocks({ value }) {
            try {
                return { typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks", value: ValidatorMissedBlocks.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:ValidatorMissedBlocks: Could not create message: ' + e.message);
            }
        },
        msgUnjailResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse", value: MsgUnjailResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUnjailResponse: Could not create message: ' + e.message);
            }
        },
    };
};
export const queryClient = ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseURL: addr });
};
class SDKModule {
    constructor(client) {
        this.registry = [];
        this.query = queryClient({ addr: client.env.apiURL });
        this.updateTX(client);
        this.structure = {};
        client.on('signer-changed', (signer) => {
            this.updateTX(client);
        });
    }
    updateTX(client) {
        const methods = txClient({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: client.env.prefix ?? "cosmos",
        });
        this.tx = methods;
        for (let m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    }
}
;
const IgntModule = (test) => {
    return {
        module: {
            CosmosSlashingV1Beta1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default IgntModule;
