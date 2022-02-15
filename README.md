# [prosemirror-weird-replace-step](https://teemukoivisto.github.io/prosemirror-weird-replace-step/)

When I replace the `'<i>p</i>o'` text with a character, say `'m'`, it produces a quite convoluted ReplaceStep which is correct but quite problematic for inverting it and reapplying it with track attributes.

## To reproduce

1. Go to https://teemukoivisto.github.io/prosemirror-weird-replace-step
2. Click 'Restore example'
3. Select <code><i>p</i>o</code>, press <code>m</code>
4. The below JSON should be shown

```json
{
  "stepType": "replace",
  "from": 5,
  "to": 31,
  "slice": {
    "content": [
      {
        "type": "text",
        "marks": [
          {
            "type": "italic"
          }
        ],
        "text": "l"
      },
      {
        "type": "text",
        "text": "oo"
      },
      {
        "type": "text",
        "marks": [
          {
            "type": "bold"
          }
        ],
        "text": "o"
      },
      {
        "type": "text",
        "text": "oooo"
      },
      {
        "type": "text",
        "marks": [
          {
            "type": "bold"
          }
        ],
        "text": "o"
      },
      {
        "type": "text",
        "marks": [
          {
            "type": "italic"
          }
        ],
        "text": "mm"
      },
      {
        "type": "text",
        "text": "oooo"
      },
      {
        "type": "text",
        "marks": [
          {
            "type": "bold"
          }
        ],
        "text": "ooo"
      },
      {
        "type": "text",
        "text": " ooo"
      },
      {
        "type": "text",
        "marks": [
          {
            "type": "bold"
          }
        ],
        "text": "o"
      },
      {
        "type": "text",
        "marks": [
          {
            "type": "italic"
          }
        ],
        "text": "c"
      }
    ]
  }
}
```

## How to install

1. `yarn`
2. `yarn start`
