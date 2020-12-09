const User = function (user) {
    this.text = user.text;
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO TODO SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Дело сделано", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};
User.findById = (dealId, result) => {
    sql.query(`SELECT * FROM TODO WHERE id = ${dealId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("найдено дело: ", res[0]);
            result(null, res[0]);
            return;
        }

        // когда ничего не удалось найти
        result({ kind: "not_found" }, null);
    });
};

User.getAll = result => {
    sql.query("SELECT * FROM TODO", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("deals: ", res);
        result(null, res);
    });
};

User.updateById = (id, deal, result) => {
    sql.query(
        "UPDATE TODO SET text =? WHERE id = ?",
        [deal.text, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("Обновлено дело ", { id: id, ...deal });
            result(null, { id: id, ...deal });
        }
    );
};

User.remove = (id, result) => {
    sql.query("DELETE FROM TODO WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // если дело не удалось получить по id
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("Удален пользователь с ", id);
        result(null, res);
    });
};
