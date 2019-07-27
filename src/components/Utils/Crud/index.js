import firebase from "../../Auth/firebase"

const useCrud = (base_path) => {

    async function create(to_insert_object, callback){

        let request_details = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': await firebase.getSessionToken()
            },
            body: JSON.stringify(to_insert_object)
        };

        console.log(request_details);
        callback();

        /*fetch(base_path, request_details)
        .then(response => response.json())
        .then(data => callback(data))*/

    }

    let read = (path, callback) => {

    }

    let update = (path, callback) => {

    }

    let remove = (callback) => {

    }

    return {
        create,
        read,
        update,
        remove
    }

}

export default useCrud;