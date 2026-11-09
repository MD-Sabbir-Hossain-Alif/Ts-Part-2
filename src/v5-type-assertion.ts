//* Type assertion

//* "as" syntax

type Status = "pending" | "approved" | "rejected";

const someStatus: string = "rejected";

const showStatus = (status: Status) => {
    console.log(`Your current application status is ${status}`);
};

showStatus(someStatus as Status);

//* non-null assertion

interface Config {
    port?: number;
}

const config: Config = {
    port: 5000,
};

const currentPort: number = config.port!;
console.log(currentPort);
// const currentPort: number = config.port as number;

//* constant assertion (lock the object)

const configuration = {
    port: 8080,
    prefix: "api/v1",
} as const;

// configuration.port = 502384 Err: 'read only'
