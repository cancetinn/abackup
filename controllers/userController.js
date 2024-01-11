const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (username, password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            password: hashedPassword
        });

        await newUser.save();
        console.log('Kullanıcı başarıyla oluşturuldu:', username);
    } catch (error) {
        console.error('Kullanıcı oluşturulurken hata:', error);
    }
};

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).send('Kullanıcı bulunamadı');
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).send('Geçersiz şifre');
        }

        res.send('Giriş başarılı');
    } catch (error) {
        console.error('Giriş sırasında hata:', error);
        res.status(500).send('Sunucu hatası');
    }
};
