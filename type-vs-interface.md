# Type Alias vs Interface in TypeScript

## Introduction

TypeScript-এ `type` এবং `interface` দুটোই ব্যবহার করা হয় কোনো value বা object-এর shape নির্ধারণ করার জন্য। শুরুতে এদের কাজ প্রায় একই মনে হতে পারে। যেমন, কোনো object-এ `name` string এবং `age` number থাকবে—এটা দুইভাবেই লেখা যায়। তবে কিছু গুরুত্বপূর্ণ পার্থক্য আছে। কোন পরিস্থিতিতে কোনটি ব্যবহার করব, সেটা বুঝলে code আরও পরিষ্কার ও maintainable হয়।

## Detailed Discussion

প্রথমে `interface` দিয়ে object-এর structure define করা যায়:

```ts
interface User {
    name: string;
    age: number;
}
```

একই structure `type` দিয়েও লেখা যায়:

```ts
type User = {
    name: string;
    age: number;
};
```

দুটো ক্ষেত্রেই `User` type-এর object-এ `name` এবং `age` থাকতে হবে। তবে `interface` declaration merging support করে। অর্থাৎ একই নামে আবার interface declare করলে property-গুলো একসঙ্গে যুক্ত হয়।

```ts
interface User {
    email: string;
}
```

এখন `User`-এর মধ্যে `name`, `age` এবং `email` থাকবে। সাধারণ `type` alias এভাবে আবার declare করে merge করা যায় না।

আরেকটি পার্থক্য হলো, `type` শুধু object নয়; union, intersection, primitive, tuple এবং অন্যান্য type প্রকাশ করতে পারে।

```ts
type Status = "active" | "inactive";

```

`interface` সাধারণত object shape এবং class contract বোঝাতে সুবিধাজনক। `type` বেশি flexible, বিশেষ করে union বা complex type তৈরি করার সময়।

## Conclusion

আমার মতে, object structure define করতে `interface` ব্যবহার করা ভালো default choice। আর union, tuple, primitive alias বা intersection দরকার হলে `type` ব্যবহার করব। তবে project-এর existing convention অনুসরণ করাও গুরুত্বপূর্ণ।