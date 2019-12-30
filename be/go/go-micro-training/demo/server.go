package main

import (
	"context"
	"fmt"
	"github.com/OahcUil94/notebook/be/go/go-micro-training/demo/pbmodels"
	"github.com/micro/go-micro"
)

type Greeter struct {}

func (g *Greeter) Hello(ctx context.Context, req *pbmodels.Request, res *pbmodels.Response) error {
	res.Greeting = "Hello " + req.Name
	return nil
}

func main() {
	service := micro.NewService(
		micro.Name("greeter"),
	)

	service.Init()
	pbmodels.RegisterGreeterHandler(service.Server(), new(Greeter))

	if err := service.Run(); err != nil {
		fmt.Println(err)
	}
}
