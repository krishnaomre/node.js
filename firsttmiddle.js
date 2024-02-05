module.exports=function ageCheckMiddleware(req, res, next) {
    const {age}  = req.query;

    if (!age || isNaN(age)) {
        return res.send("sorry age not defined");
        //return res.status(400).json({ error: 'Invalid age parameter' });
    }

    const userAge = parseInt(age);

    if (userAge < 18) {
        return res.status(403).json({ error: 'You must be 18 or older to access this resource' });
    }

        next();
}
