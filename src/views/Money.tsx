import Layout from "@/components/Layout";
import {NumberPadOptions, TagList} from "@/constants/icon.const";
import styled from "styled-components";

const TagsSection = styled.section`
    background-color: #fff;
    border: 1px solid red;
    padding: 12px 16px;

    > ol {
        margin: 0 -12px;

        > li {
            background-color: #d9d9d9;
            border-radius: 18px;
            display: inline-block;
            padding: 3px 18px;
            font-size: 14px;
            margin: 8px 12px;
        }
    }

    > button {
        border: none;
        background: none;
        padding: 2px 4px;
        color: #666;
        border-bottom: 1px solid #333;
        margin-top: 10px;
    }
`;
const NotesSection = styled.section`
    padding: 10px 16px;
    background-color: #f5f5f5;
    font-size: 14px;

    > label {
        width: 100%;
        align-items: center;
        display: flex;

        > span {
            color: #333;
            white-space: nowrap;
            margin-right: 16px;
        }

        > input {
            width: 100%;
            display: block;
            height: 72px;
            background: none;
            border: none;
        }
    }
`;
const CategorySection = styled.section`
    font-size: 24px;

    > ul {
        display: flex;
        background: #c4c4c4;

        > li {
            width: 55%;
            padding: 16px 0;
            text-align: center;
            position: relative;

            &.selected::after {
                content: "";
                display: block;
                height: 3px;
                background: #333;
                position: absolute;
                width: 100%;
                left: 0;
                bottom: 0;
            }
        }
    }

`;
const NumberPadSection = styled.section``;

function Money() {
    return (
        <Layout>
            <TagsSection className="tags">
                <ol>
                    {TagList.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="在这里添加备注"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div>100</div>
                <div>
                    {NumberPadOptions.map((option) => (
                        <button key={option}>{option}</button>
                    ))}
                </div>
            </NumberPadSection>
        </Layout>
    );
}

export default Money;
