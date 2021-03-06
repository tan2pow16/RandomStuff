#include <string.h>
#include  <stdlib.h>
#include <inttypes.h>

/*
 * Copyright (c) 2021, tan2pow16. All rights reserved.
 *
 * Reddit r/badcode Bad Code Coding Challenge #58 submission.
 *  https://www.reddit.com/r/badcode/comments/maj3iw/bad_code_coding_challenge_58_are_these_dates_in/
 */

int main(int argc, char *argv[])
{
  char *line0;  size_t leng;
  char *line1;  uint8_t idx;  leng = 0x13;
  char *cache;  ssize_t len;

  line0 = malloc(0x14);       line1 = malloc(0x14);
  while((len = getline(&line1, &leng, stdin)) >= 0)
  {
    if(line0)
      for(idx = 0 ; (len > 1) && (idx < len) && (line1[idx] <= line0[idx]) ; idx++)
        if(line0[idx] - line1[idx])
          return !!(fprintf(stdout, "false\n") - 6);
            // Why parsing and formatting strings when you don't have to? c:

    strcpy(line0, line1);
  }

  return !!(fprintf(stdout, "true\n") - 5);
}
