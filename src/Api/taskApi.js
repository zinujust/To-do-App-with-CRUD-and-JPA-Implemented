const taskApi = {

    addTask: (task) => {
        const obj = {
            "id": null,
            "text": task,
            "done": false
        }

        fetch("http://localhost:8080/api/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
    },

    viewAllTasks: (setArr) => {
        fetch("http://localhost:8080/api/incomplete", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => setArr(data))

    },

    deleteTask: (id) => {
        const obj = {
            "id": id,
            "text": "N/A",
            "done": false
        }

        fetch(`http://localhost:8080/api/delete`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(response => {
                if (response.status === 200) {
                    console.log("Success");
                }
            })
    },

    taskCompleted: (id) => {
        const obj = {
            "id": id,
            "text": "N/A",
            "done": false
        }

        fetch("http://localhost:8080/api/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
    },

    viewCompleted: (setArr) => {
        fetch("http://localhost:8080/api/completed", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => setArr(data))
    }
}

export default taskApi;