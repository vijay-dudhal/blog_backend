{
	"info": {
		"_postman_id": "49cc1795-307d-4456-97a6-3bab32f1e3e3",
		"name": "blog_backend",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "39588896"
	},
	"item": [
		{
			"name": "New Request",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://blog-backend-vgnj.onrender.com/api/user",
					"protocol": "https",
					"host": [
						"blog-backend-vgnj",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"user"
					]
				}
			},
			"response": []
		},
		{
			"name": "https://blog-backend-vgnj.onrender.com/api/user",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\":\"vijay\",\r\n    \"email\":\"vijay@dudhal7947\",\r\n    \"password\":\"vijay8010\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://blog-backend-vgnj.onrender.com/api/user",
					"protocol": "https",
					"host": [
						"blog-backend-vgnj",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"user"
					]
				}
			},
			"response": []
		},
		{
			"name": "https://blog-backend-vgnj.onrender.com/api/blog",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"title\":\"friends\",\r\n    \"content\":\"friends are very good\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://blog-backend-vgnj.onrender.com/api/blog",
					"protocol": "https",
					"host": [
						"blog-backend-vgnj",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"blog"
					]
				}
			},
			"response": []
		}
	]
}