const wrapInArray = <T>(value: T) => {
    return [value];
};

const stringArr = wrapInArray("abc");
const numberArr = wrapInArray<number>(123);

stringArr.map((item) => item.toUpperCase());

console.log(stringArr, numberArr);

interface User {
    name: string;
    role: string;
}

interface Blog {
    title: string;
    discription: string;
    date: string;
}

interface ApiResponse<T> {
    data: T;
    success: boolean;
    statusCode: number;
}

type UserResponse = ApiResponse<User>;
// type BlogResponse = ApiResponse<Blog>;


const userRes: UserResponse = {
    data: {
        name: "Sabbir",
        role: "admin"
    },
    success: true,
    statusCode: 200,
};

const blogRes: ApiResponse<Blog> = {
    data: {
        title: "This is typescript lecture",
        discription: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        date: "02-14-2023"
    },
    success: false,
    statusCode: 404
}