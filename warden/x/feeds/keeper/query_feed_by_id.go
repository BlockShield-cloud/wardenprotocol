package keeper

import (
	"context"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	types "github.com/warden-protocol/wardenprotocol/warden/x/feeds/types/v1beta1"
)

func (k Keeper) FeedById(ctx context.Context, req *types.QueryFeedByIdRequest) (*types.QueryFeedByIdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	return &types.QueryFeedByIdResponse{}, nil
}