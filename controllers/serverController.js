const Server = require('../models/Server');

exports.addServer = async (req, res) => {
    try {
        const { name, ip, port, username, password } = req.body;

        const server = new Server({ name, ip, port, username, password });
        await server.save();

        res.json({ message: 'Sunucu başarıyla eklendi' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Sunucu eklenirken bir hata oluştu' });
    }
};
