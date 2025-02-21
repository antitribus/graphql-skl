build:
	docker build -t graphql-skl .

run:
	docker run -p 8000:4000 -p 8001:4001 graphql-skl
