export async function wait(ms: number) {
  return await new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Waited ${ms} ms!`);
      resolve("hey");
    }, ms);
  });
}
