package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"net/http"

	graphql "github.com/graph-gophers/graphql-go"
	"github.com/graph-gophers/graphql-go/relay"
)

type query struct{}

func (q *query) Search() string {
	return "VALUE"
}

func main() {

	fmt.Printf("start Main Graphql <Go> ")

	s := `
                schema {
                        query: Query
                }
                type Query {
                        search: String!
                }
        `
	schema := graphql.MustParseSchema(s, &query{})

	http.Handle("/",
		&relay.Handler{
			Schema: schema},
	)

	router := mux.NewRouter()

	router.HandleFunc("/graphql", graphqlTestGetQuery).Methods("POST")
	http.Handle("/graphql_1",
		&relay.Handler{
			Schema: schema},
	)

	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		panic(err)
	}

}

func graphqlTestGetQuery(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("in graphqlTestGetQuery")

	s := `
                schema {
                        query: Query
                }
                type Query {
                        search: String!
                }
        `

	schema := graphql.MustParseSchema(s, &query{})

	h := &relay.Handler{
		Schema: schema}

	fmt.Println(h)

	//h := &relay.Handler{
	//	Schema: schema}
	//
	//fmt.printf(w,h)

	//payload, err := jsonData.MarshalJSON()

}
