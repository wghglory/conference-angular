import { FormControl } from '@angular/forms';

export function restrictedWords(words) {
  return (control: FormControl): { [key: string]: any } => {
    // words = ['foo', 'bar']
    if (!words) {
      return null;
    }

    // control value maybe = foo bar you are
    const invalidWords = words
      .map((w) => (control.value.includes(w) ? w : null))
      .filter((w) => w != null);

    return invalidWords && invalidWords.length > 0
      ? { restrictedWords: invalidWords.join(', ') }
      : null;
  };
}
