package main

import (
	"github.com/OahcUil94/notebook/be/go/videos/go-kit-microservice-getting-started-season-one/services"
	httptransport "github.com/go-kit/kit/transport/http"
	"net/http"
)

func main() {
	user := services.UserService{}
	endp := services.MakeUserEndpoint(user)

	serverHandler := httptransport.NewServer(endp, services.DecodeUserRequest, services.EncodeUserResponse)
	http.ListenAndServe(":8080", serverHandler)
}
