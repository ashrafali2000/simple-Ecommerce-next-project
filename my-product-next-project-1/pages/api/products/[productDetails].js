export default function handler(req, res) {
    if(req.method === "GET") {
        console.log(req.query);
        
    }
}