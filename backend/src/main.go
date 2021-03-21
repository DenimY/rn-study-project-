package main

import (
	"encoding/json"
	"fmt"
	"github.com/bitly/go-simplejson"
	"github.com/gorilla/mux"
	"net/http"
)

type data struct {
	code        string
	title       string
	description string
}

var testData []data

func main() {
	router := mux.NewRouter()
	// router.HandleFunc("/test/", multiPartData).Methods("POST")
	//router.HandleFunc("/oauth/token", tokenData).Methods("POST")
	router.HandleFunc("/v1/messages", getMessage).Methods("POST")
	//router.HandleFunc("/v1/users/me/files", multiPartData).Methods("POST")

	// push
	//router.HandleFunc("/push", multiPartData).Methods("POST")

	router.HandleFunc("/test/{code}", GetData).Methods("GET")
	router.HandleFunc("/test/{category}/{id:[0-9]}",
		func(w http.ResponseWriter, r *http.Request) {
			vars := mux.Vars(r)
			w.WriteHeader(http.StatusOK)
			fmt.Println(w, "Category : %v", vars["category"])

		}).Methods("POST")

	router.HandleFunc("/", HomeHandler)
	http.Handle("/", router)

	http.ListenAndServe(":8082", router)

	testData = append(testData, data{code: "1", title: "first title", description: "test des"})
	testData = append(testData, data{code: "2", title: "second title", description: "test des2"})

}

func HomeHandler(writer http.ResponseWriter, request *http.Request) {

}

func GetData(writer http.ResponseWriter, request *http.Request) {

}

func homeHandler(w http.ResponseWriter, r *http.Request) {

}

type userData struct {
	Username  string `json:"username"`
	Password  string `json:"password"`
	GrantType string `json:"grant_type"`
}

// MsgDataForm data form
type MsgDataForm struct {
	// {"clientMsgId": ""}
	ClientMsgID string `json:"clientMsgId"`
}

func getMessage(w http.ResponseWriter, r *http.Request) {
	// fmt.Println("getMessage")
	// params := mux.Vars(r)

	// len := r.ContentLength
	// body := make([]byte, len)
	// r.Body.Read(body)
	// fmt.Println("BODY : ", string(body))
	// fmt.Println(w, string(body))

	var msgData MsgDataForm

	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&msgData); err != nil {
		fmt.Println("err====================")
		panic(err)
		// respondWithError(w, http.StatusBadRequest, "Invalid request payload")
		// return
	}

	defer r.Body.Close()

	fmt.Println("clientMsgId : ", msgData.ClientMsgID)

	// c := make(chan string)

	// c <- msgData.ClientMsgID

	// jsonBody := simplejson.New()
	jsonData := simplejson.New()

	jsonData.Set("code", "2000")
	jsonData.Set("message", "Success")

	// jsonBody.Set("message", "success")
	// jsonBody.Set("data", jsonData)

	// jsonBody.Set("push_uri", "push_uri_value")
	// jsonBody.Set("jti", "jti_value")

	payload, err := jsonData.MarshalJSON()
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(payload)

	ch := make(chan string, 1)
	ch <- msgData.ClientMsgID

	go requestProc(ch)

}

func requestProc(ch chan string) {

}
