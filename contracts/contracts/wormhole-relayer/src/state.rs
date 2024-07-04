use cw_storage_plus::Item;
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

#[allow(unused_imports)]
use cosmwasm_std::{StdResult, Storage};

pub const STATE: Item<State> = Item::new("state");

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct State {
    pub wormhole_contract: String,
}

// pub fn config(storage: &mut dyn Storage) -> Singleton<ConfigInfo> {
//     singleton(storage, CONFIG_KEY)
// }

// pub fn config_read(storage: &dyn Storage) -> ReadonlySingleton<ConfigInfo> {
//     singleton_read(storage, CONFIG_KEY)
// }
