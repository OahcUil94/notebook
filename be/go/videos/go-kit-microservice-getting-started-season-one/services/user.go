package services

import (
	"context"
	"encoding/json"
	"errors"
	"github.com/go-kit/kit/endpoint"
	"net/http"
	"strconv"
)

type IUserService interface {
	GetName(id int) string
}

type UserService struct {}

func (u UserService) GetName(id int) string {
	if id == 101 {
		return "hello"
	}

	return "guest"
}

type UserRequest struct {
	UID int `json:"uid"`
}

type UserResponse struct {
	Result string `json:"result"`
}


func MakeUserEndpoint(userSrv UserService) endpoint.Endpoint {
	return func (ctx context.Context, request interface{}) (response interface{}, err error) {
		r := request.(UserRequest)
		return UserResponse{Result: userSrv.GetName(r.UID)}, nil
	}
}

func DecodeUserRequest(c context.Context, r *http.Request) (interface{}, error) {
	if r.URL.Query().Get("uid") != "" {
		uid, _ := strconv.Atoi(r.URL.Query().Get("uid"))
		return UserRequest{UID: uid}, nil
	}

	return nil, errors.New("参数错误")
}

func EncodeUserResponse(ctx context.Context, w http.ResponseWriter, response interface{}) error {
	w.Header().Set("Content-Type", "application/json")
	return json.NewEncoder(w).Encode(response)
}
