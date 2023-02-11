const router = require("express").Router();
const { Journal, Entry } = require("../models");

// Login 
router.get('/', (req, res) => {
    // If user has already logged in, then redirect to dashboard
    console.log(`logged in is ${req.session.logged_in}`);
    if (req.session.logged_in) {
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
                user_id: req.session.user_id,
            },
        });
        if (!journalData) {
            res.render('dashboard', { logged_in: req.session.logged_in });
            return;
        }
        const journals = journalData.map((journal) => journal.get({ plain: true }));
        res.render('dashboard', {
            journals,
            logged_in: req.session.logged_in,
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
            logged_in: req.session.logged_in,
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
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;