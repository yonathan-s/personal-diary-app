DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    diary_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(300) NOT NULL,
    date DATE DEFAULT CURRENT_DATE,
    PRIMARY KEY (diary_id)
);

INSERT INTO diary (title, description)
VALUES
    ('A Fresh Start', 'Today felt like a fresh start. I woke up early, went for a walk, and spent some time working on things I had been putting off. It felt good to end the day feeling productive.'),
    ('A Long Day', 'Today was busier than expected. I had several tasks to finish and felt exhausted by the afternoon. In the evening, I relaxed by watching a film and having dinner.'),
    ('Good Conversation', 'I had a great conversation with an old friend today. We talked about how much things have changed and shared some funny memories. It reminded me how important it is to stay connected.'),
    ('Trying Something New', 'I decided to try something new today. I was nervous at first, but I ended up really enjoying it. It reminded me that being inexperienced should not stop me from trying new things.'),
    ('Looking Ahead', 'I spent some time thinking about my goals today. I wrote down a few small steps I can take to make progress. Having a clearer plan made me feel more motivated about the future.');