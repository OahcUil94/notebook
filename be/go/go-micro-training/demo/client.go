package main

import (
	"context"
	"fmt"
	"github.com/OahcUil94/notebook/be/go/go-micro-training/demo/pbmodels"
	"github.com/micro/go-micro"
)

func main() {
	service := micro.NewService(micro.Name("greeter.client"))
	service.Init()

	greeter := pbmodels.NewGreeterService("greeter", service.Client())

	resp, err := greeter.Hello(context.TODO(), &pbmodels.Request{Name: "John"})
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(resp.Greeting)
}
