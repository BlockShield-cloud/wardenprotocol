use bindings::query::AddressType;
use cosmwasm_schema::{cw_serde, QueryResponses};
use cosmwasm_std::{Binary, PageRequest};
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

#[cw_serde]
pub struct InstantiateMsg {
    pub wormhole_contract: String,
}

#[cw_serde]
pub enum QueryMsg {
    VerifyVAA { vaa: Binary, block_time: u64 },
}

#[cw_serde]
pub enum ExecuteMsg {
    SendMessage { message: Binary, nonce: u32 },

    ReceiveMessage { vaa: Binary },
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Message {
    pub message: Binary,
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct ParsedVAA {
    pub version: u8,
    pub guardian_set_index: u32,
    pub timestamp: u32,
    pub nonce: u32,
    pub len_signers: u8,

    pub emitter_chain: u16,
    pub emitter_address: Vec<u8>,
    pub sequence: u64,
    pub consistency_level: u8,
    pub payload: Vec<u8>,

    pub hash: Vec<u8>,
}
