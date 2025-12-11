const express = require("express");
const Groq = require("groq-sdk");    
//router creation
const router = express.Router();
// Created Groq client using the API key
// Llama 3, Gemma, Mixtral.
const client =new Groq({
    apiKey:process.env.GROQ_KEY
})


router.get("/ai-forecast",async(req,res)=>{
    const query=req.query.q;//user query for city

    try{
       //call Groq with user query
       const completion = await client.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: [
                {
                    role: "system",
                    content: "Give ONLY a short 1–2 sentence weather summary. No personality. No slang. No sarcasm. No roleplay. No storytelling. No jokes. No accents. No dramatic lines. No metaphors. No long text. Just a simple factual weather update. If the user asks anything, respond ONLY with the short weather answer. Do NOT add anything extra."

                },
                {
                    role: "user",
                    content: query, // User question
                },
            ],
        });

        // Extract AI reply text
        const reply = completion.choices[0].message.content;
       res.json({ reply });
    }
    catch (err) {
    console.error("AI route error:", err.response?.data || err.message);
    res.status(500).json({ error: "ai request failed" });
}

});

//module export
module.exports=router;