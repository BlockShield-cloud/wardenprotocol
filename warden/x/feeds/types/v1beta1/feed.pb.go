// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: warden/feeds/v1beta1/feed.proto

package v1beta1

import (
	fmt "fmt"
	_ "github.com/cosmos/cosmos-sdk/types/query"
	_ "github.com/cosmos/cosmos-sdk/types/tx/amino"
	_ "github.com/cosmos/gogoproto/gogoproto"
	proto "github.com/cosmos/gogoproto/proto"
	ast "github.com/warden-protocol/wardenprotocol/shield/ast"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Feed struct {
	Id      string         `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Creator string         `protobuf:"bytes,2,opt,name=creator,proto3" json:"creator,omitempty"`
	Value   ast.Expression `protobuf:"bytes,3,opt,name=value,proto3" json:"value"`
}

func (m *Feed) Reset()         { *m = Feed{} }
func (m *Feed) String() string { return proto.CompactTextString(m) }
func (*Feed) ProtoMessage()    {}
func (*Feed) Descriptor() ([]byte, []int) {
	return fileDescriptor_83ac2ca47db2ff0a, []int{0}
}
func (m *Feed) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Feed) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Feed.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Feed) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Feed.Merge(m, src)
}
func (m *Feed) XXX_Size() int {
	return m.Size()
}
func (m *Feed) XXX_DiscardUnknown() {
	xxx_messageInfo_Feed.DiscardUnknown(m)
}

var xxx_messageInfo_Feed proto.InternalMessageInfo

func (m *Feed) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Feed) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Feed) GetValue() ast.Expression {
	if m != nil {
		return m.Value
	}
	return ast.Expression{}
}

func init() {
	proto.RegisterType((*Feed)(nil), "warden.feeds.v1beta1.Feed")
}

func init() { proto.RegisterFile("warden/feeds/v1beta1/feed.proto", fileDescriptor_83ac2ca47db2ff0a) }

var fileDescriptor_83ac2ca47db2ff0a = []byte{
	// 303 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x5c, 0x90, 0xcd, 0x4a, 0x03, 0x31,
	0x14, 0x85, 0x27, 0xf5, 0x8f, 0x8e, 0x20, 0x38, 0x14, 0x19, 0x8a, 0x4c, 0x8b, 0xab, 0x52, 0x30,
	0xa1, 0xba, 0x70, 0x5f, 0xb0, 0x0f, 0xd0, 0xa5, 0x2b, 0x33, 0x93, 0x6b, 0x1a, 0x98, 0xe6, 0x8e,
	0x49, 0x5a, 0xdb, 0xb7, 0xf0, 0x31, 0x5c, 0xfa, 0x18, 0x5d, 0x76, 0xe9, 0x4a, 0xa4, 0x5d, 0xf8,
	0x1a, 0xd2, 0x64, 0xda, 0x85, 0x8b, 0x84, 0x7b, 0x0e, 0xdf, 0x3d, 0x5c, 0x4e, 0xdc, 0x79, 0xe3,
	0x46, 0x80, 0x66, 0x2f, 0x00, 0xc2, 0xb2, 0xf9, 0x20, 0x07, 0xc7, 0x07, 0x5e, 0xd1, 0xca, 0xa0,
	0xc3, 0xa4, 0x15, 0x00, 0xea, 0x01, 0x5a, 0x03, 0xed, 0x4b, 0x3e, 0x55, 0x1a, 0x99, 0xff, 0x03,
	0xd8, 0xee, 0x17, 0x68, 0xa7, 0x68, 0x59, 0xce, 0x2d, 0xb0, 0xd7, 0x19, 0x98, 0xe5, 0x21, 0xae,
	0xe2, 0x52, 0x69, 0xee, 0x14, 0xea, 0x9a, 0x6d, 0x49, 0x94, 0xe8, 0x47, 0xb6, 0x9b, 0x6a, 0xf7,
	0x5a, 0x22, 0xca, 0x12, 0x18, 0xaf, 0x14, 0xe3, 0x5a, 0xa3, 0xf3, 0x2b, 0x76, 0xbf, 0x63, 0x27,
	0x0a, 0x4a, 0xc1, 0xb8, 0x75, 0xbb, 0x17, 0xdc, 0x1b, 0x15, 0x1f, 0x8f, 0x00, 0x44, 0x72, 0x11,
	0x37, 0x94, 0x48, 0x49, 0x97, 0xf4, 0x9a, 0xe3, 0x86, 0x12, 0x49, 0x1a, 0x9f, 0x15, 0x06, 0xb8,
	0x43, 0x93, 0x36, 0xbc, 0xb9, 0x97, 0xc9, 0x43, 0x7c, 0x32, 0xe7, 0xe5, 0x0c, 0xd2, 0xa3, 0x2e,
	0xe9, 0x9d, 0xdf, 0x5d, 0xd1, 0x90, 0x4b, 0x77, 0x99, 0x8f, 0x8b, 0xca, 0x80, 0xb5, 0x0a, 0xf5,
	0xb0, 0xb9, 0xfa, 0xee, 0x44, 0x1f, 0xbf, 0x9f, 0x7d, 0x32, 0x0e, 0xfc, 0xf0, 0x79, 0xb5, 0xc9,
	0xc8, 0x7a, 0x93, 0x91, 0x9f, 0x4d, 0x46, 0xde, 0xb7, 0x59, 0xb4, 0xde, 0x66, 0xd1, 0xd7, 0x36,
	0x8b, 0x9e, 0x46, 0x52, 0xb9, 0xc9, 0x2c, 0xa7, 0x05, 0x4e, 0x59, 0xa8, 0xeb, 0xd6, 0x5f, 0x57,
	0x60, 0x59, 0xeb, 0x7f, 0x92, 0x2d, 0xea, 0xc2, 0xdd, 0xb2, 0x82, 0x43, 0xed, 0xf9, 0xa9, 0xc7,
	0xee, 0xff, 0x02, 0x00, 0x00, 0xff, 0xff, 0x6d, 0x8e, 0xce, 0xd9, 0x95, 0x01, 0x00, 0x00,
}

func (m *Feed) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Feed) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Feed) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Value.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintFeed(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1a
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintFeed(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Id) > 0 {
		i -= len(m.Id)
		copy(dAtA[i:], m.Id)
		i = encodeVarintFeed(dAtA, i, uint64(len(m.Id)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintFeed(dAtA []byte, offset int, v uint64) int {
	offset -= sovFeed(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Feed) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Id)
	if l > 0 {
		n += 1 + l + sovFeed(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovFeed(uint64(l))
	}
	l = m.Value.Size()
	n += 1 + l + sovFeed(uint64(l))
	return n
}

func sovFeed(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozFeed(x uint64) (n int) {
	return sovFeed(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Feed) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowFeed
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Feed: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Feed: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFeed
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthFeed
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFeed
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Id = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFeed
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthFeed
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFeed
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Value", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFeed
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthFeed
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthFeed
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Value.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipFeed(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthFeed
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipFeed(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowFeed
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowFeed
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowFeed
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthFeed
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupFeed
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthFeed
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthFeed        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowFeed          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupFeed = fmt.Errorf("proto: unexpected end of group")
)