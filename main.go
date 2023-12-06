package main

import (
	"flag"
	"fmt"
)

func main(){
	prof := flag.String("profession", "operator","professional to be greeted")
	flag.Parse()
	fmt.Println("smooooooooth ", prof)
	fmt.Println("hello smooooooooth ", prof)
}