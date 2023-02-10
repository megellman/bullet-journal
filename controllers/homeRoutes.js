const router = require("express").Router();
const { Journal, Entry } = require("../models");

// Login 
router.get('/', (req, res) => {
    // If user has already logged in, then redirect to dashboard
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

// All journals 
router.get('/journals', async (req, res) => {
    try {
        const journalData = await Journal.findAll({
            where: {
                user_id: req.session.userId,
            },
        });
        if (!journalData) {
            res.render('dashboard', { loggedIn: req.session.loggedIn });
            return;
        }
        const journals = journalData.map((journal) => journal.get({ plain: true }));
        res.render('dashboard', {
            journals,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    };
});


// All entries from specific journal
router.get('/journals/:id/entries', async (req, res) => {
    try {
        const entryData = await Entry.findAll({
            include: "title",
            where: {
                journal_id: req.params.id,
            },
        });

        const entries = entryData.map((entry) => entry.get({ plain: true }));

        res.render('journal', {
            entries,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

// Specific entry from specific journal
router.get('/journals/:id/entries/:entry_id', async (req, res) => {
    try {
        const entryData = await Entry.findByPk(req.params.entry_id);

        const entry = entryData.get({ plain: true });

        res.render('entry-details', {
            entry,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;