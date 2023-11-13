import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

const output = await replicate.run(
    "hyteve/citygpt-completion-v1:4d94b43b6448bc58c03f42a36c0f8603a8cdad75a1f4326f338486163558dcb7",
    {
    input: {
            x: 700,
            y: 300,
        }
    }
);

console.log(output);
