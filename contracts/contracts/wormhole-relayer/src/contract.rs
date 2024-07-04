use crate::{
    msg::{ExecuteMsg, InstantiateMsg, Message, ParsedVAA, QueryMsg},
    state::{State, STATE},
};
#[cfg(not(feature = "library"))]
use cosmwasm_std::entry_point;
use cosmwasm_std::{
    to_json_binary, Addr, Binary, CosmosMsg, DepsMut, Env, MessageInfo, QueryRequest, Response,
    StdError, StdResult, WasmMsg, WasmQuery,
};
use cw2::set_contract_version;

// version info for migration info
const CONTRACT_NAME: &str = "crates.io:wardenprotocol-wormhole-relayer";
const CONTRACT_VERSION: &str = env!("CARGO_PKG_VERSION");

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn instantiate(
    deps: DepsMut,
    _env: Env,
    _info: MessageInfo,
    msg: InstantiateMsg,
) -> StdResult<Response> {
    let state = State {
        wormhole_contract: msg.wormhole_contract,
    };
    STATE.save(deps.storage, &state)?;

    set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;
    Ok(Response::default().add_attribute("version", CONTRACT_VERSION))
}

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn execute(deps: DepsMut, env: Env, info: MessageInfo, msg: ExecuteMsg) -> StdResult<Response> {
    let state = STATE.load(deps.storage)?;

    match msg {
        ExecuteMsg::SendMessage { message, nonce } => {
            let msg = CosmosMsg::Wasm(WasmMsg::Execute {
                contract_addr: state.wormhole_contract.clone(),
                funds: vec![],
                msg: to_json_binary(&ExecuteMsg::SendMessage {
                    message: message.clone(),
                    nonce,
                })?,
            });

            Ok(Response::new()
                .add_attribute("action", "send_message")
                .add_message(msg))
        }

        ExecuteMsg::ReceiveMessage { vaa } => {
            let vaa: ParsedVAA = deps.querier.query(&QueryRequest::Wasm(WasmQuery::Smart {
                contract_addr: state.wormhole_contract.clone(),
                msg: to_json_binary(&QueryMsg::VerifyVAA {
                    vaa: vaa.clone(),
                    block_time: env.block.time.seconds(),
                })?,
            }))?;

            let msg = Message::try_from_slice(&vaa.payload)
                .map_err(|_| StdError::generic_err("Invalid Message"))?;

            Ok(Response::default()
                .add_attribute("action", "receive_message")
                .add_attribute("nick", msg.nick)
                .add_attribute("text", msg.text))
        }
    }
}

pub fn parse_vaa(wormhole: Addr, deps: DepsMut, env: Env, data: &Binary) -> StdResult<ParsedVAA> {
    Ok(vaa)
}

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn query(deps: Deps<WardenProtocolQuery>, _env: Env, msg: QueryMsg) -> StdResult<Binary> {}
