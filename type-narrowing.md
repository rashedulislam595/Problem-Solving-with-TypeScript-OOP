# Type Narrowing in TypeScript

## Introduction

Type Narrowing হলো TypeScript-এর এমন একটি feature, যার মাধ্যমে কোনো variable-এর broad type-কে condition check করে আরও নির্দিষ্ট type-এ আনা যায়। ধরেন, একটি function string অথবা number—দুই ধরনের value নিতে পারে। কিন্তু string-এর method ব্যবহার করার আগে TypeScript-কে নিশ্চিত করতে হবে যে value-টি string। এই নিশ্চয়তা type guard দিয়ে তৈরি করা যায়।

## Detailed Discussion

প্রথমে `typeof` ব্যবহার করে primitive type check করা যায়।

```ts
function formatValue(value: string | number) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    return value.toFixed(2);
}
```

প্রথম branch-এ TypeScript `value`-কে string হিসেবে ধরে। অন্য branch-এ সেটি number হিসেবে narrow হয়।

Class instance check করার জন্য `instanceof` ব্যবহার করা যায়।

```ts
function describeDate(value: Date | string) {
    if (value instanceof Date) {
        return value.toDateString();
    }

    return value.toUpperCase();
}
```

এখানে `Date` object হলে Date-এর method ব্যবহার করা হচ্ছে; অন্যথায় string-এর method ব্যবহার হচ্ছে।

Object-এর মধ্যে নির্দিষ্ট property আছে কি না যাচাই করতে `in` operator কাজে লাগে।

```ts
type Admin = { name: string; permissions: string[] };
type Guest = { name: string; visitCount: number };

function showInfo(user: Admin | Guest) {
    if ("permissions" in user) {
        return user.permissions.join(", ");
    }

    return user.visitCount;
}
```

`permissions` property থাকলে user-কে Admin হিসেবে narrow করা যায়। না থাকলে Guest branch-এ যায়।

## Conclusion

Type Narrowing code-কে নিরাপদ এবং readable করে। `typeof` primitive value, `instanceof` class instance এবং `in` object property check করার জন্য ব্যবহার করা যায়। Union type নিয়ে কাজ করার সময় এই technique খুবই দরকারি।