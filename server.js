// Admin route to get user by UID (returns only coins)
app.get('/user/:uid', async (req, res) => {
    try {
        const user = await User.findOne({ uid: req.params.uid });
        if (!user) {
            return res.status(404).send('User not found');
        }
        // Only return the coin count, not the UID
        res.json({ coins: user.coins });
    } catch (err) {
        res.status(500).send('Server error');
    }
});
