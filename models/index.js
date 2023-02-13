const User = require('./User');
const Journal = require('./Journal');
const Entry = require('./Entry');

User.hasMany(Journal, {
  foreignKey: 'user_id'
});

Journal.belongsTo(User, {
  foreignKey: 'user_id'
});

Journal.hasMany(Entry, {
    foreignKey: "journal_id"
});

Entry.belongsTo(Journal, {
    foreignKey: "journal_id"
});

module.exports = { User, Journal, Entry };