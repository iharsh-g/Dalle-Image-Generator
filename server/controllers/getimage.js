require("dotenv").config();

//OPEN AI CONFIGURATIONS
const openai = require("openai");
const configuration = new openai.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openaiApi = new openai.OpenAIApi(configuration);

//dalleRoutes Handler
exports.dalleRoutes = async(req, res) => {
    try {
        const {prompt} = req.body;

        const aiResponse = await openaiApi.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        const image = aiResponse.data.data[0].b64_json;
        res.status(200).json({
            success: true,
            photo: image,
        })
    }
    catch(e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        })
    }
}