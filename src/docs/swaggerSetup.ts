import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
	openapi: "3.0.3",
	info: {
		title: "API de ejemplo",
		version: "1.0.0",
		description: "Esta es una API de ejemplo para el curso de NodeJS",
		contact: {
			name: "Lee",
			email: "test@fake.dev",
			url: "https://fake.dev",
		},
		license: {
			name: "MIT",
			url: "https://opensource.org/licenses/MIT",
		},
	},
	servers: [
		{
			url: "http://localhost:3000",
			description: "Servidor local",
		},
	],

	components: {
		securitySchemes: {
			BearerAuth: {
				type: "http",
				scheme: "bearer",
			},
		},
		schemas: {
			auth: {
				type: "object",
				required: ["email", "password"],
				properties: {
					username: {
						type: "string",
					},
					email: {
						type: "string",
					},
					password: {
						type: "string",
					},
				},
			},
		},
	},
};

const swaggerOptions: OAS3Options = {
	swaggerDefinition,
	apis: ["./src/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);
