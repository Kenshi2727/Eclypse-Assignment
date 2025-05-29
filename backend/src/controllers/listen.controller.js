const listenHandler = (req, res) => {
    console.log("Listen request received");
    res.status(200).json({
        message: "/checkout endpoint is working",
        timestamp: new Date().toISOString()
    });
}

export default listenHandler;