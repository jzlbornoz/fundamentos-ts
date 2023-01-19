export function parsed(input: string): string[];
export function parsed(input: string[]): string;
export function parsed(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(' ');
  } else if (typeof input === 'string') {
    return input.split(' ');
  }
}
console.log('res as array: ', parsed('hola xd soy yo'));
console.log('res as string; ', parsed(['hola', 'JAJAJAJAJ', 'e']));
