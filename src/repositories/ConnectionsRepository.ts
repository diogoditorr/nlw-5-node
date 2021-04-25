import { EntityRepository } from "typeorm";
import { Repository } from "typeorm/repository/Repository";
import { Connection } from "../entities/Connection";

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection> {}

export { ConnectionsRepository }