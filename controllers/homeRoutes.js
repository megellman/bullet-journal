const router = require("express").Router();
const { Journal, Entry } = require("../models");
const withAuth = require("../utils/auth");

// Login 
router.get('/', (req, res) => {
    // If user has already logged in, then redirect to dashboard
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

// All journals 
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // console.log("Logged in: " + req.session.user_id);
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
        console.log(err)
        res.status(500).json(err);
    };
});

// Specific journal and its entries
router.get("/journals/:id", withAuth, async (req, res) => {
    try {
        const journalData = await Journal.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!journalData) {
            res.status(404).json({ message: "Journal not found" });
            return;
        }
        const journal = journalData.get({ plain: true });
        const entryData = await Entry.findAll({
            where: {
                journal_id: journal.id
            }
        });
        if (entryData) {
            const entries = entryData.map((entry) => entry.get({ plain: true }));

            res.status(200).render("journal", {
                journal,
                entries,
                logged_in: req.session.logged_in
            });
        } else {
            res.status(200).render("journal", {
                journal,
                logged_in: req.session.logged_in
            });
        }

    } catch (error) {
        res.status(500).json(err);
    }
});

// Specific entry from specific journal
router.get('/journals/:id/entries/:entry_id', withAuth, async (req, res) => {
    try {
        const entryData = await Entry.findByPk(req.params.entry_id);

        const entry = entryData.get({ plain: true });

        res.render('journal', {
            entry,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

// Render create journal form
router.get("/create-journal", withAuth, async (req, res) => {
    let create;
    let update;
    let journal;

    if (req.params.id) {
        create = false;
        update = true;
        const journalData = await Journal.findByPk(req.params.id);
        journal = journalData.get({ plain: true });
    } else {
        create = true;
        update = false;
    }

    res.render("createJournal", {
        logged_in: req.session.logged_in,
        create,
        update,
        journal
    });
});

// Render create entry form
router.get("/create-entry", withAuth, async (req, res) => {
    let create;
    let update;
    let entry;

    if (req.params.entry_id) {
        create = false;
        update = true;
        const entryData = await Entry.findByPk(req.params.entry_id);
        entry = entryData.get({ plain: true});
    } else {
        create = true;
        update = false;
    }

    res.render("createEntry", {
        logged_in: req.session.logged_in,
        create,
        update,
        entry
    });
});

module.exports = router;