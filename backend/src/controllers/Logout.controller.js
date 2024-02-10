const Logout = (req, res) => {
    // res.clearCookie('token');
    return res.json({ status: 200, message: "You have been logged out successfully." });
}

export default Logout;