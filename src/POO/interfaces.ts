interface Driver {
  database: string;
  password: string | number;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnect(port: number): boolean;
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string | number,
    public port: number,
    private host: string
  ) {}

  connect(): void {
    console.log('is connect Oracle');
  }

  disconnect(): void {
    console.log('is disconnect Oracle');
  }

  isConnect(port: number): boolean {
    if (port == this.port) {
      return true;
    } else {
      return false;
    }
  }
}

class Postgress implements Driver {
  constructor(
    public database: string,
    public password: string | number,
    public port: number
  ) {}

  connect(): void {
    console.log('is connect Postgres');
  }

  disconnect(): void {
    console.log('is disconnect Postgress');
  }

  isConnect(port: number): boolean {
    if (port == this.port) {
      return true;
    } else {
      return false;
    }
  }
}
