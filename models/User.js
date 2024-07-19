import db from '../db/index.js'

class User {
  static async findAll() {
    const query = `
      select id, username, firstName, lastName, email, avatar 
      from users
    `
    const results = await db.raw(query)
    return results
  }

  static async findById(id) {
    /**
     * TODO: finish this method
     * Example is:
     * const query = `SELECT * FROM users WHERE id = ?`
      const results = await db.raw(query, [id])
      return results[0]
      This fails on "does not return the user password"
     */
    const query = `SELECT id, username, firstName, lastName, email, avatar FROM users WHERE id = ?`
    const results = await db.raw(query, [id])
    return results[0]
  }
}

export default User
