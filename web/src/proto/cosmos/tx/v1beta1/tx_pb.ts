// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file cosmos/tx/v1beta1/tx.proto (package cosmos.tx.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { SignMode } from "../signing/v1beta1/signing_pb.js";
import { CompactBitArray } from "../../crypto/multisig/v1beta1/multisig_pb.js";
import { Coin } from "../../base/v1beta1/coin_pb.js";

/**
 * Tx is the standard type used for broadcasting transactions.
 *
 * @generated from message cosmos.tx.v1beta1.Tx
 */
export class Tx extends Message<Tx> {
  /**
   * body is the processable content of the transaction
   *
   * @generated from field: cosmos.tx.v1beta1.TxBody body = 1;
   */
  body?: TxBody;

  /**
   * auth_info is the authorization related content of the transaction,
   * specifically signers, signer modes and fee
   *
   * @generated from field: cosmos.tx.v1beta1.AuthInfo auth_info = 2;
   */
  authInfo?: AuthInfo;

  /**
   * signatures is a list of signatures that matches the length and order of
   * AuthInfo's signer_infos to allow connecting signature meta information like
   * public key and signing mode by position.
   *
   * @generated from field: repeated bytes signatures = 3;
   */
  signatures: Uint8Array[] = [];

  constructor(data?: PartialMessage<Tx>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.tx.v1beta1.Tx";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "body", kind: "message", T: TxBody },
    { no: 2, name: "auth_info", kind: "message", T: AuthInfo },
    { no: 3, name: "signatures", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Tx {
    return new Tx().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Tx {
    return new Tx().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Tx {
    return new Tx().fromJsonString(jsonString, options);
  }

  static equals(a: Tx | PlainMessage<Tx> | undefined, b: Tx | PlainMessage<Tx> | undefined): boolean {
    return proto3.util.equals(Tx, a, b);
  }
}

/**
 * TxRaw is a variant of Tx that pins the signer's exact binary representation
 * of body and auth_info. This is used for signing, broadcasting and
 * verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
 * the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
 * as the transaction ID.
 *
 * @generated from message cosmos.tx.v1beta1.TxRaw
 */
export class TxRaw extends Message<TxRaw> {
  /**
   * body_bytes is a protobuf serialization of a TxBody that matches the
   * representation in SignDoc.
   *
   * @generated from field: bytes body_bytes = 1;
   */
  bodyBytes = new Uint8Array(0);

  /**
   * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
   * representation in SignDoc.
   *
   * @generated from field: bytes auth_info_bytes = 2;
   */
  authInfoBytes = new Uint8Array(0);

  /**
   * signatures is a list of signatures that matches the length and order of
   * AuthInfo's signer_infos to allow connecting signature meta information like
   * public key and signing mode by position.
   *
   * @generated from field: repeated bytes signatures = 3;
   */
  signatures: Uint8Array[] = [];

  constructor(data?: PartialMessage<TxRaw>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.tx.v1beta1.TxRaw";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "body_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "auth_info_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "signatures", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxRaw {
    return new TxRaw().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxRaw {
    return new TxRaw().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxRaw {
    return new TxRaw().fromJsonString(jsonString, options);
  }

  static equals(a: TxRaw | PlainMessage<TxRaw> | undefined, b: TxRaw | PlainMessage<TxRaw> | undefined): boolean {
    return proto3.util.equals(TxRaw, a, b);
  }
}

/**
 * SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT.
 *
 * @generated from message cosmos.tx.v1beta1.SignDoc
 */
export class SignDoc extends Message<SignDoc> {
  /**
   * body_bytes is protobuf serialization of a TxBody that matches the
   * representation in TxRaw.
   *
   * @generated from field: bytes body_bytes = 1;
   */
  bodyBytes = new Uint8Array(0);

  /**
   * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
   * representation in TxRaw.
   *
   * @generated from field: bytes auth_info_bytes = 2;
   */
  authInfoBytes = new Uint8Array(0);

  /**
   * chain_id is the unique identifier of the chain this transaction targets.
   * It prevents signed transactions from being used on another chain by an
   * attacker
   *
   * @generated from field: string chain_id = 3;
   */
  chainId = "";

  /**
   * account_number is the account number of the account in state
   *
   * @generated from field: uint64 account_number = 4;
   */
  accountNumber = protoInt64.zero;

  constructor(data?: PartialMessage<SignDoc>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.tx.v1beta1.SignDoc";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "body_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "auth_info_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "account_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignDoc {
    return new SignDoc().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignDoc {
    return new SignDoc().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignDoc {
    return new SignDoc().fromJsonString(jsonString, options);
  }

  static equals(a: SignDoc | PlainMessage<SignDoc> | undefined, b: SignDoc | PlainMessage<SignDoc> | undefined): boolean {
    return proto3.util.equals(SignDoc, a, b);
  }
}

/**
 * TxBody is the body of a transaction that all signers sign over.
 *
 * @generated from message cosmos.tx.v1beta1.TxBody
 */
export class TxBody extends Message<TxBody> {
  /**
   * messages is a list of messages to be executed. The required signers of
   * those messages define the number and order of elements in AuthInfo's
   * signer_infos and Tx's signatures. Each required signer address is added to
   * the list only the first time it occurs.
   * By convention, the first required signer (usually from the first message)
   * is referred to as the primary signer and pays the fee for the whole
   * transaction.
   *
   * @generated from field: repeated google.protobuf.Any messages = 1;
   */
  messages: Any[] = [];

  /**
   * memo is any arbitrary note/comment to be added to the transaction.
   * WARNING: in clients, any publicly exposed text should not be called memo,
   * but should be called `note` instead (see https://github.com/cosmos/cosmos-sdk/issues/9122).
   *
   * @generated from field: string memo = 2;
   */
  memo = "";

  /**
   * timeout is the block height after which this transaction will not
   * be processed by the chain
   *
   * @generated from field: uint64 timeout_height = 3;
   */
  timeoutHeight = protoInt64.zero;

  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, the transaction will be rejected
   *
   * @generated from field: repeated google.protobuf.Any extension_options = 1023;
   */
  extensionOptions: Any[] = [];

  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, they will be ignored
   *
   * @generated from field: repeated google.protobuf.Any non_critical_extension_options = 2047;
   */
  nonCriticalExtensionOptions: Any[] = [];

  constructor(data?: PartialMessage<TxBody>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.tx.v1beta1.TxBody";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "messages", kind: "message", T: Any, repeated: true },
    { no: 2, name: "memo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "timeout_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 1023, name: "extension_options", kind: "message", T: Any, repeated: true },
    { no: 2047, name: "non_critical_extension_options", kind: "message", T: Any, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxBody {
    return new TxBody().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxBody {
    return new TxBody().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxBody {
    return new TxBody().fromJsonString(jsonString, options);
  }

  static equals(a: TxBody | PlainMessage<TxBody> | undefined, b: TxBody | PlainMessage<TxBody> | undefined): boolean {
    return proto3.util.equals(TxBody, a, b);
  }
}

/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 *
 * @generated from message cosmos.tx.v1beta1.AuthInfo
 */
export class AuthInfo extends Message<AuthInfo> {
  /**
   * signer_infos defines the signing modes for the required signers. The number
   * and order of elements must match the required signers from TxBody's
   * messages. The first element is the primary signer and the one which pays
   * the fee.
   *
   * @generated from field: repeated cosmos.tx.v1beta1.SignerInfo signer_infos = 1;
   */
  signerInfos: SignerInfo[] = [];

  /**
   * Fee is the fee and gas limit for the transaction. The first signer is the
   * primary signer and the one which pays the fee. The fee can be calculated
   * based on the cost of evaluating the body and doing signature verification
   * of the signers. This can be estimated via simulation.
   *
   * @generated from field: cosmos.tx.v1beta1.Fee fee = 2;
   */
  fee?: Fee;

  constructor(data?: PartialMessage<AuthInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.tx.v1beta1.AuthInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "signer_infos", kind: "message", T: SignerInfo, repeated: true },
    { no: 2, name: "fee", kind: "message", T: Fee },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthInfo {
    return new AuthInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthInfo {
    return new AuthInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthInfo {
    return new AuthInfo().fromJsonString(jsonString, options);
  }

  static equals(a: AuthInfo | PlainMessage<AuthInfo> | undefined, b: AuthInfo | PlainMessage<AuthInfo> | undefined): boolean {
    return proto3.util.equals(AuthInfo, a, b);
  }
}

/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 *
 * @generated from message cosmos.tx.v1beta1.SignerInfo
 */
export class SignerInfo extends Message<SignerInfo> {
  /**
   * public_key is the public key of the signer. It is optional for accounts
   * that already exist in state. If unset, the verifier can use the required \
   * signer address for this position and lookup the public key.
   *
   * @generated from field: google.protobuf.Any public_key = 1;
   */
  publicKey?: Any;

  /**
   * mode_info describes the signing mode of the signer and is a nested
   * structure to support nested multisig pubkey's
   *
   * @generated from field: cosmos.tx.v1beta1.ModeInfo mode_info = 2;
   */
  modeInfo?: ModeInfo;

  /**
   * sequence is the sequence of the account, which describes the
   * number of committed transactions signed by a given address. It is used to
   * prevent replay attacks.
   *
   * @generated from field: uint64 sequence = 3;
   */
  sequence = protoInt64.zero;

  constructor(data?: PartialMessage<SignerInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.tx.v1beta1.SignerInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "public_key", kind: "message", T: Any },
    { no: 2, name: "mode_info", kind: "message", T: ModeInfo },
    { no: 3, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignerInfo {
    return new SignerInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignerInfo {
    return new SignerInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignerInfo {
    return new SignerInfo().fromJsonString(jsonString, options);
  }

  static equals(a: SignerInfo | PlainMessage<SignerInfo> | undefined, b: SignerInfo | PlainMessage<SignerInfo> | undefined): boolean {
    return proto3.util.equals(SignerInfo, a, b);
  }
}

/**
 * ModeInfo describes the signing mode of a single or nested multisig signer.
 *
 * @generated from message cosmos.tx.v1beta1.ModeInfo
 */
export class ModeInfo extends Message<ModeInfo> {
  /**
   * sum is the oneof that specifies whether this represents a single or nested
   * multisig signer
   *
   * @generated from oneof cosmos.tx.v1beta1.ModeInfo.sum
   */
  sum: {
    /**
     * single represents a single signer
     *
     * @generated from field: cosmos.tx.v1beta1.ModeInfo.Single single = 1;
     */
    value: ModeInfo_Single;
    case: "single";
  } | {
    /**
     * multi represents a nested multisig signer
     *
     * @generated from field: cosmos.tx.v1beta1.ModeInfo.Multi multi = 2;
     */
    value: ModeInfo_Multi;
    case: "multi";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<ModeInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.tx.v1beta1.ModeInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "single", kind: "message", T: ModeInfo_Single, oneof: "sum" },
    { no: 2, name: "multi", kind: "message", T: ModeInfo_Multi, oneof: "sum" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModeInfo {
    return new ModeInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModeInfo {
    return new ModeInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModeInfo {
    return new ModeInfo().fromJsonString(jsonString, options);
  }

  static equals(a: ModeInfo | PlainMessage<ModeInfo> | undefined, b: ModeInfo | PlainMessage<ModeInfo> | undefined): boolean {
    return proto3.util.equals(ModeInfo, a, b);
  }
}

/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 *
 * @generated from message cosmos.tx.v1beta1.ModeInfo.Single
 */
export class ModeInfo_Single extends Message<ModeInfo_Single> {
  /**
   * mode is the signing mode of the single signer
   *
   * @generated from field: cosmos.tx.signing.v1beta1.SignMode mode = 1;
   */
  mode = SignMode.UNSPECIFIED;

  constructor(data?: PartialMessage<ModeInfo_Single>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.tx.v1beta1.ModeInfo.Single";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "mode", kind: "enum", T: proto3.getEnumType(SignMode) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModeInfo_Single {
    return new ModeInfo_Single().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModeInfo_Single {
    return new ModeInfo_Single().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModeInfo_Single {
    return new ModeInfo_Single().fromJsonString(jsonString, options);
  }

  static equals(a: ModeInfo_Single | PlainMessage<ModeInfo_Single> | undefined, b: ModeInfo_Single | PlainMessage<ModeInfo_Single> | undefined): boolean {
    return proto3.util.equals(ModeInfo_Single, a, b);
  }
}

/**
 * Multi is the mode info for a multisig public key
 *
 * @generated from message cosmos.tx.v1beta1.ModeInfo.Multi
 */
export class ModeInfo_Multi extends Message<ModeInfo_Multi> {
  /**
   * bitarray specifies which keys within the multisig are signing
   *
   * @generated from field: cosmos.crypto.multisig.v1beta1.CompactBitArray bitarray = 1;
   */
  bitarray?: CompactBitArray;

  /**
   * mode_infos is the corresponding modes of the signers of the multisig
   * which could include nested multisig public keys
   *
   * @generated from field: repeated cosmos.tx.v1beta1.ModeInfo mode_infos = 2;
   */
  modeInfos: ModeInfo[] = [];

  constructor(data?: PartialMessage<ModeInfo_Multi>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.tx.v1beta1.ModeInfo.Multi";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bitarray", kind: "message", T: CompactBitArray },
    { no: 2, name: "mode_infos", kind: "message", T: ModeInfo, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModeInfo_Multi {
    return new ModeInfo_Multi().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModeInfo_Multi {
    return new ModeInfo_Multi().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModeInfo_Multi {
    return new ModeInfo_Multi().fromJsonString(jsonString, options);
  }

  static equals(a: ModeInfo_Multi | PlainMessage<ModeInfo_Multi> | undefined, b: ModeInfo_Multi | PlainMessage<ModeInfo_Multi> | undefined): boolean {
    return proto3.util.equals(ModeInfo_Multi, a, b);
  }
}

/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 *
 * @generated from message cosmos.tx.v1beta1.Fee
 */
export class Fee extends Message<Fee> {
  /**
   * amount is the amount of coins to be paid as a fee
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
   */
  amount: Coin[] = [];

  /**
   * gas_limit is the maximum gas that can be used in transaction processing
   * before an out of gas error occurs
   *
   * @generated from field: uint64 gas_limit = 2;
   */
  gasLimit = protoInt64.zero;

  /**
   * if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees.
   * the payer must be a tx signer (and thus have signed this field in AuthInfo).
   * setting this field does *not* change the ordering of required signers for the transaction.
   *
   * @generated from field: string payer = 3;
   */
  payer = "";

  /**
   * if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used
   * to pay fees instead of the fee payer's own balance. If an appropriate fee grant does not exist or the chain does
   * not support fee grants, this will fail
   *
   * @generated from field: string granter = 4;
   */
  granter = "";

  constructor(data?: PartialMessage<Fee>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.tx.v1beta1.Fee";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "gas_limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "payer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Fee {
    return new Fee().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Fee {
    return new Fee().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Fee {
    return new Fee().fromJsonString(jsonString, options);
  }

  static equals(a: Fee | PlainMessage<Fee> | undefined, b: Fee | PlainMessage<Fee> | undefined): boolean {
    return proto3.util.equals(Fee, a, b);
  }
}
