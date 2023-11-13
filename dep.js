import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

let prediction = await replicate.deployments.predictions.create(
    "hyteve",
    "citygpt-completion-dep-v1",
    {
    input: {
            x: 500,
            y: 500,
        }
    }
);
prediction = await replicate.wait(prediction);
console.log(prediction.output);