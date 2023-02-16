# Car Shop: Um back-end concentrado no cadastro de novos carros/motos e listar eles conforme a necessidade.

## Conhecimento envolvido:

- Typescript 
- MongoDB
- POO e ODMs
- Docker
- Cobertura de Testes Unitários

## Execução da aplicação localmente


1. Instale as dependências.

```bash
npm install
```

2. Execute o comando do docker.

```bash
docker-compose up -d
```

3. Rode o banco de dados.

```bash
npm run dev
```


## Rotas de acesso: ( Você pode usar o ThunderClient ou o Insomnia )

### Cadastro de automóveis: ( Método POST)
- Rota para cadastro de carros:
```bash
localhost:3002/cars/
```
- JSON:
```bash
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

- Rota para cadastro de motos:
```bash
localhost:3002/motorcycles/
```
- JSON:
```bash
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```
### Listagem dos automoveis: ( Método GET)
#### ( Caso quiser listar por ID so adicionar a frente da rota )

- Rota de listagem de todos os carros:
```bash
localhost:3002/cars/
```

- Rota de listagem de todas as motos:
```bash
localhost:3002/motorcycles/
```

## Caso não tenha o docker instalado, acesse:

Para linux:
https://docs.docker.com/engine/install/ubuntu/

Para Mac:
https://www.docker.com/

