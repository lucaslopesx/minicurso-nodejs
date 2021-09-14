const fastify = require("fastify");
const server = fastify({ logging: true });

let count = 0;

server.get("/", function (req, res) {
    count++;
    res.send(`Voce acessou essa rota ${count} vezes`);
});

server.listen(3001, function (error, address) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log(`Aplicação disponível em ${address}`);
});
